import { Space } from '@bright/constants'
import { BreadcrumbItem as ChakraBreadcrumbItem, BreadcrumbLink as ChakraBreadcrumbLink } from '@chakra-ui/core'
import React, { FC } from 'react'

interface IBreadcrumbItem {
  isCurrentPage?: boolean
  href: string
}

const Breadcrumb: FC<IBreadcrumbItem> = ({ children, isCurrentPage = false, href }) => {
  return (
    <ChakraBreadcrumbItem addSeparator={!isCurrentPage} spacing={Space.s} separator="/" isCurrentPage={isCurrentPage}>
      <ChakraBreadcrumbLink href={href}>{children}</ChakraBreadcrumbLink>
    </ChakraBreadcrumbItem>
  )
}

export default Breadcrumb
