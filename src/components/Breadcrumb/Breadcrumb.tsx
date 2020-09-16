import BreadcrumbItem from '@bright/components/Breadcrumb/BreadcrumbItem'
import { BoxProps, Breadcrumb as ChakraBreadcrumb } from '@chakra-ui/core'
import React, { FC } from 'react'

type IBreadcrumbProps = Pick<BoxProps, 'children'>

interface IBreadcrumb extends FC<IBreadcrumbProps> {
  Item: typeof BreadcrumbItem
}

const Breadcrumb: IBreadcrumb = ({ children }) => {
  return <ChakraBreadcrumb>{children}</ChakraBreadcrumb>
}

Breadcrumb.Item = BreadcrumbItem

export default Breadcrumb
