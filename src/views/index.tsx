import React, { useEffect, useState } from 'react';
import GlobalStyle from '../theme/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom'
import { theme } from '../theme/MainTheme';
import { userStore } from '../stores';
import { ApplicationRoutes } from '../routes/applicationRoutes'
import { AuthorizationRoutes } from '../routes/authorizationRoutes';
import { UseCase } from '../api/use-cases/UseCase';
import { Loader } from '../components/atoms/Loader/Loader';
import { toast, ToastContainer } from 'react-toastify';
import { observer } from 'mobx-react';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loading-skeleton/dist/skeleton.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'react-circular-progressbar/dist/styles.css';

const Root = observer(() => {
  const [ isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
       userStore.checkIsAuthorized()
        .then(() => setLoading(false))
  }, [])

  UseCase.registerGlobalErrorHandler((error) => {
    if (error.message) {
      toast.error(error.message);
    }

    if (Array.isArray(error)) {
      error.forEach(error => {
        toast.error(error);
      })
    }

    throw error;
  });

  return <>
      <ThemeProvider theme={ theme }>
        <SkeletonTheme  baseColor={theme.colors.brand.background300} highlightColor={theme.colors.brand.background100}>
          {isLoading ? <Loader /> : <Router>
            { userStore.isAuthorized ? <ApplicationRoutes/> : <AuthorizationRoutes />}
            <GlobalStyle/>
          </Router>}
        </SkeletonTheme>
      </ThemeProvider>
      <ToastContainer position={'top-center'} newestOnTop />
    </>
}
)
export default Root;
