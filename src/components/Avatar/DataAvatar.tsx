import React from 'react'

import { DataAvatarProps } from '../../types/avatarType'
import { AvatarImage } from '../../Helper/helper'

const DataAvatar = ({ src, alt }: DataAvatarProps) => {
  return <AvatarImage variant="rounded" src={src} alt={alt} />
}

export default DataAvatar
