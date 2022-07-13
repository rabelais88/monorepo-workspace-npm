# npm + workspace + monorepo example

as a response to https://stackoverflow.com/questions/72914319

# bootstrapping
```bash
$(project root) npm install
```

# test execution
```bash
$(project root) cd server # or client
$(project root) npm run start
```

# typescript config
- all typescript configs are shared from `shared/tsconfig.json`.
- add shared alias to `shared/tsconfig.json`
- a workspace-specific alias should be added to its `$workspace/tsconfig.json`
- this sample project is using ts-node. there are some ts-node specific settings.