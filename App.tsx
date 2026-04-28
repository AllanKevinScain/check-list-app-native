import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { RootStack } from './src/routes/index.routes';

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
