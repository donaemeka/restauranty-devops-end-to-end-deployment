# Security Policy

## Supported Versions
- Current production version: 1.0

## Reporting a Vulnerability
Email: [your-email@domain.com]

## Security Measures

### 1. Secret Management
- Kubernetes Secrets for credentials
- No hardcoded secrets in code
- Environment variables for configuration

### 2. Network Security  
- Network Policies restrict pod communication
- Only frontend exposed to internet
- Backend services isolated

### 3. Container Security
- Non-root user in containers
- Regular security updates
- Minimal base images

### 4. Access Control
- RBAC in Kubernetes
- Limited service account permissions

### 5. Monitoring
- Prometheus for metrics
- Grafana for visualization
- Application logging
