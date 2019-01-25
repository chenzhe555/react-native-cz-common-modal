import React, { Component } from 'react';
import { View, AppRegistry } from 'react-native';
import CZPackElement from 'react-native-cz-pack-element';


const modalsMap = {}
//目前仅提供显示隐藏
export default class CZCommonModal extends Component{
    //显示Modal视图,获取引用可以，不建议自己移除组件，需调用hide方法
    static show = (view = null, key = 'defaultKey') => {
        let element = null;
        if (view) {
            //如果已存在Key对应的，直接移除
            if(modalsMap.hasOwnProperty(key)) {
                element = modalsMap[key];
                element.destoryElement();
            }
            element = new CZPackElement(view);
            modalsMap[key] = element;
        }
        return element;
    };

    //隐藏Modal视图
    static hide = (key = 'defaultKey') => {
        let element = modalsMap[key];
        if (element) element.destoryElement();
    }
}