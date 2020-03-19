import React from 'react'
import { StageSpinner } from 'react-spinners-kit'
import styled from 'styled-components'

const LoaderWrap = styled.div`
  background: #fafafa73;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 12;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 350ms ease-in-out;
`

const Loader = () => (
  <LoaderWrap>
    <StageSpinner size={35} color="grey" />
  </LoaderWrap>
)

export default Loader
