module.exports = {
  preset: "@testing-library/react-native",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  snapshotFormat: {
    printBasicPrototype: false,
  },
};
