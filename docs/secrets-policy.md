# Secrets policy

This repository never stores real credentials in Git.

## Local v1

- Use ignored files or direct local secret creation.
- Keep only templates such as `*.example`.
- Treat Kubernetes Secrets as deployment targets, not as a source-controlled secret store.

## Cloud phases

- Store secrets in a managed cloud secret manager.
- Synchronize secrets into Kubernetes with External Secrets or an equivalent mechanism.
- Keep Terraform and GitOps inputs free of raw credential values.
