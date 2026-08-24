# Local setup

This project assumes a local `k3s` cluster for Local v1.

## Bootstrap order

1. Create a local `k3s` cluster.
2. Install Argo CD into the `argocd` namespace with standard `kubectl` and `helm` commands.
3. Update the repository URL in `platform/gitops/bootstrap/root-application.yaml`.
4. Apply the root Argo CD application with `kubectl`.
5. Let Argo CD reconcile `clusters/local`.
6. Add local secrets through ignored files or direct `kubectl create secret` commands.
7. Validate that platform components and workloads are healthy.
8. Run `k6` scenarios from `tests/k6`.

## Local secret handling

Local v1 must not store secret values in Git.

Allowed approaches:

- create secrets from ignored local files,
- create secrets directly with `kubectl`,
- use local secret tooling that reads from ignored sources.

Do not commit:

- `.env` files with real values,
- kubeconfig files,
- cloud credentials,
- Grafana admin passwords,
- Terraform variable files with real secrets.
