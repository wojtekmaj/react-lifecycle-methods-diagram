# Multiple React versions support

## How to add new React version

1. Add a new directory with React version, e.g. `16.4`. You may copy one of the existing directories to serve you as an example.
2. Declare a new version string in `supportedReactVersions` in `propTypes.js`. This will automatically add declared version to React version dropdown.
3. Declare a new dynamic import of new React version in `diagramVersions` in `Diagram.js`.
4. Apply necessary changed to previously copied diagram.
