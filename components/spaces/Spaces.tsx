"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Spaces = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Spaces</h1>
      <Card>
        <CardHeader>
          <CardTitle>Spaces Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This is the Spaces page. Here you can view and manage various spaces or areas related to World Heritage Sites.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Spaces;