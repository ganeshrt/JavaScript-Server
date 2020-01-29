# 12 Factor App
The twelve factor app is methodology for building software-as-a-services that has clean contract with underlying operating system,enable continuous development with maximum agility,significant scale up, capability ,independent of programming languages and back end services.

![](https://qph.fs.quoracdn.net/main-qimg-6db143e6f087d6537fffcb6e7adeddcc)


### 1. Code base
Use one codebase, even when building cross-platform apps. Address the needs of specific devices with version control.

### 2. Dependencies
Explicitly declare and isolate all dependencies. 

### 3. Configuration
Don’t store config as constants in code. Instead, design the app to read its config from the environment.

### 4. Backing Services
Treat back-end services as attached resources to be accessed with a URL or other locator stored in config.

### 5. Build, Release, Run
Strictly separate build and run stages.

### 6. Processes
Execute the app as one or more stateless processes. Data that must be persistent should be stored in a stateful backing service.

### 7. Port binding
Use port binding to export services.

### 8. Concurrency
Scale out apps horizontally, not vertically. 

### 9. Disposability
Use fast startups and graceful shutdowns to maximize robustness.

### 10. Parity
Facilitate continuous deployment by ensuring that development, staging, and production environments are as similar as possible.

### 11. Logs
Treat logs as event streams. Logs should not be concerned with routing or storing the app’s output.

### 12. Admin processes
Run admin tasks as one-off processes from a machine in the production environment that’s running the latest production code.

