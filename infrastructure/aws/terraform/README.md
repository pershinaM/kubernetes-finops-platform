# AWS v2 foundation

This directory is reserved for the AWS implementation phase.

Planned scope:

- Terraform foundation for shared AWS resources.
- One EKS-based platform with `prod` and `nonprod` environments.
- Supporting resources such as VPC, load balancers, RDS, and billing datasets where required.
- Karpenter integration.
- CUR, FOCUS, Athena, and AWS Split Cost Allocation Data inputs for reconciliation.

Do not commit credentials, backend secrets, or provider access keys here.
