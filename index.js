import React, { Component } from 'react';
import { View, AppRegistry } from 'react-native';
import CZPackElement from 'react-native-cz-pack-element';


const modalsMap = {}
//目前仅提供显示隐藏
export default class CZCommonModal extends Component{

    //显示Modal视图
    static show = (view = null, key = 'defaultKey') => {
        if (view) {
            //如果已存在Key对应的，直接移除
            if(modalsMap.hasOwnProperty(key)) {
                let element = modalsMap[key];
                if (element) element.destoryElement();
            }
            let element = new CZPackElement(view);
            modalsMap[key] = element;
        }
    };

    //隐藏Modal视图
    static hide = (key = 'defaultKey') => {
        let element = modalsMap[key];
        if (element) element.destoryElement();
    }
}