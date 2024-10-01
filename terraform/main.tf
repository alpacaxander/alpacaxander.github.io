
# Create a VPC
resource "aws_vpc" "vpc_01" {
  cidr_block = "172.31.0.0/16"

  tags = {
    Name = "vpc_01"
  }
}

resource "aws_subnet" "subnet_01" {
  vpc_id            = aws_vpc.vpc_01.id
  cidr_block        = "172.31.0.0/24"
  availability_zone = "us-west-1b"

  tags = {
    Name = "subnet_01"
  }
}

resource "aws_subnet" "subnet_02" {
  vpc_id            = aws_vpc.vpc_01.id
  cidr_block        = "172.31.1.0/24"
  availability_zone = "us-west-1c"

  tags = {
    Name = "subnet_02"
  }
}

resource "aws_network_interface" "interface_01" {
  subnet_id   = aws_subnet.subnet_01.id
  private_ips = ["172.31.0.158"]

  tags = {
    Name = "interface_01"
  }
}

resource "aws_instance" "ui" {
  ami           = "ami-047d7c33f6e7b4bc4"
  instance_type = "t2.micro"

  credit_specification {
    cpu_credits = "standard"
  }

  tags = {
    Name = "example-frontend"
  }
}

resource "aws_lb" "example_lb" {
  name               = "Example-lb"
  internal           = false
  load_balancer_type = "application"
  security_groups    = ["sg-0dc78785bef5e972f"]
  subnets            = ["subnet-0410262d15b9543e3", "subnet-08b4fd65b6c7eb837"]
}

resource "aws_route53_zone" "paulsell_dev" {
  name = "paulsell.dev"
}

resource "aws_route53_record" "main" {
  zone_id = aws_route53_zone.paulsell_dev.zone_id
  name    = "paulsell.dev"
  type    = "A"
  alias {
    name                   = aws_lb.example_lb.dns_name
    zone_id                = aws_lb.example_lb.zone_id
    evaluate_target_health = true
  }
}
