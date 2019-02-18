
## Manual installation

npm install react-native-cz-common-modal --save

	

## Usage
###  1.引入组件
```
import CommonModal from 'react-native-cz-common-modal';

```

###  2.属性:
###  3.属性方法:
###  4.供外部调用的方法:
```
/*
* 显示Modal视图,获取引用可以，不建议自己移除组件，需调用hide方法
* */
CommonModal.show(
    <View style={[{backgroundColor: 'red', position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, justifyContent: 'center', alignItems: 'center'}]}>
        <Text>测试视图</Text>
    </View>, 'ceshi-key'
);
```

```
/*
* 隐藏Modal视图
* */
CommonModal.hide('ceshi-key');
```
