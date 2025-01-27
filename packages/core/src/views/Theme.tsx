import React, { useContext, useState } from 'react'

import { isWeb, useIsomorphicLayoutEffect } from '../constants/platform'
import { getThemeParentClassName } from '../createTamagui'
import { useConstant } from '../hooks/useConstant'
import { ThemeName, Themes } from '../types'
import { ThemeContext } from './ThemeContext'
import { ThemeManager, ThemeManagerContext } from './ThemeManagerContext'

export type ThemeProps = {
  disableThemeClass?: boolean
  name: ThemeName | null
  children?: any
}

export const Theme = (props: ThemeProps) => {
  const parent = useContext(ThemeManagerContext)
  const themes = useContext(ThemeContext)
  const [parentName, setParentName] = useState(parent.name || 'light')
  if (!themes) {
    console.warn('no themes???', props)
    return props.children
  }
  const name = props.name as string
  const theme = themes[name] || themes[`${name}-${parentName}`]
  const themeManager = useConstant<ThemeManager>(() => {
    const manager = new ThemeManager()
    if (name) {
      manager.setActiveTheme(name, themes[name])
    }
    return manager
  })

  useIsomorphicLayoutEffect(() => {
    themeManager.setActiveTheme(name, theme)
    return parent.onChangeTheme((next) => {
      if (next) {
        themeManager.setActiveTheme(next, themes[next])
        setParentName(next)
      }
    })
  }, [themes, name])

  if (!name) {
    return props.children
  }

  const contents = themeManager ? (
    <ThemeManagerContext.Provider value={themeManager}>
      {props.children}
    </ThemeManagerContext.Provider>
  ) : (
    props.children
  )

  if (isWeb) {
    if (props.disableThemeClass) {
      return contents
    }
    const color = themes[name]?.['color']?.['variable']
    return (
      <div
        className={getThemeParentClassName(name)}
        // in order to provide currentColor, set color by default
        style={{ display: 'contents', color }}
      >
        {contents}
      </div>
    )
  }

  return contents
}
