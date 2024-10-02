variable "aws_region" {
  type    = string
  default = "us-west-1"
}

variable "aws_availability_zone" {
  type    = string
  default = "us-west-1b"
}

variable "ami" {
  type = string
  // Free tier ami
  default = "ami-0da424eb883458071"
}

variable "ec2_type" {
  type    = string
  default = "t2.micro"
}

variable "vpc_cidr_block" {
  type    = string
  default = "172.31.0.0/16"
}

variable "public_subnets" {
  type = map(any)
  default = {
    subnet_1 = {
      az   = "us-west-1b"
      cidr = "172.31.1.0/24"
    }
    subnet_2 = {
      az   = "us-west-1c"
      cidr = "172.31.2.0/24"
    }
  }
}

variable "certificate_arn" {
  type    = string
  default = "arn:aws:acm:us-west-1:754573987324:certificate/757dd1f7-06a6-4459-83fa-4868fa9070c8"
}

variable "my_ip" {
  type = string
}
