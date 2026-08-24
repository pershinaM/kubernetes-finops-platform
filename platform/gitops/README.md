# GitOps layer

This directory is intended for Argo CD applications, projects, and supporting manifests that define the repository-to-cluster deployment boundary.

Keep this layer narrow:

- application definitions,
- app-of-apps or equivalent root composition,
- namespace-level bootstrap where needed,
- references to platform and workload manifests.

Do not store secrets in Git-managed manifests.

`bootstrap/root-application.yaml` is the manual handoff point used to let Argo CD take over reconciliation of the repository.
