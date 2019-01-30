import React from 'react'
import { Iterable } from 'immutable'

export const toJS = WrappedComponent => 
wrappedComponentProps => {
    const KEY = 0
    const VALUE = 1
    const propsJS = Object.entries(wrappedComponentProps)
    .reduce((newProps, wrappedComponentProps) => {
        newProps[wrappedComponentProps[KEY]] = 
        Iterable.isIterable(wrappedComponentProps[VALUE]) ? 
        wrappedComponentProps[VALUE].toJS() :
        wrappedComponentProps[VALUE]
        return newProps
    }, {}
    )
    return <WrappedComponent {...propsJS} />
}