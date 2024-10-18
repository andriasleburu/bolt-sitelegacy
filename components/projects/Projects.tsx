"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Projects = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Projects</h1>
      <Card>
        <CardHeader>
          <CardTitle>Projects Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This is the Projects page. Here you can view and manage various projects related to World Heritage Sites.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Projects;