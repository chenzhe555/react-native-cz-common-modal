
# react-native-cz-common-modal

## Getting started

`$ npm install react-native-cz-common-modal --save`

### Mostly automatic installation

`$ react-native link react-native-cz-common-modal`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-cz-common-modal` and add `RNCzCommonModal.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNCzCommonModal.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.chenzhe.commonmodal.RNCzCommonModalPackage;` to the imports at the top of the file
  - Add `new RNCzCommonModalPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-cz-common-modal'
  	project(':react-native-cz-common-modal').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-cz-common-modal/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-cz-common-modal')
  	```


## Usage
```javascript
import RNCzCommonModal from 'react-native-cz-common-modal';

// TODO: What to do with the module?
RNCzCommonModal;
```
  