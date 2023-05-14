import { Oval } from "react-loader-spinner";
import React from "react"
import styled from "styled-components";
import { theme } from "../../../theme/main-theme";

const SLoaderWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-items: center;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.65);
  z-index: 10000;
`

const SLoader = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`
export const LoadingScreen = () => {
    return <SLoaderWrapper>
        <SLoader>
            <Oval
                height={ 80 }
                width={ 80 }
                color={theme.colors.brand.primary300}
                visible
                ariaLabel='oval-loading'
                secondaryColor={theme.colors.brand.primary100}
                strokeWidth={ 2 }
                strokeWidthSecondary={ 2 }
            />
        </SLoader>
    </SLoaderWrapper>
}
