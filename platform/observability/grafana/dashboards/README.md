# Dashboards as code

Dashboards are versioned in Git and managed through Grafana Operator or another declarative mechanism chosen for the repository.

Required dashboard groups:

- `application-overview`
- `kubernetes-capacity`
- `finops`

These dashboards should reflect the ownership schema and support workload, namespace, product, and environment analysis.

Each dashboard folder now contains a placeholder ConfigMap so the repository already has a concrete dashboards-as-code path before operator-managed CRs are introduced.
