import React, { Component } from 'react';
import ToPages from './ToPages';
import MainLayout from '../Layouts/MainLayout/MainLayout';

const IndexPage = ({ location }) => {
  return (
    <MainLayout>
      <ToPages location={location} />
    </MainLayout>
  );
};

IndexPage.propTypes = {
};

export default IndexPage;