import React from 'react';
import { UiLabel, UiLabelHeading, UiLabelButtonText } from '@/components/ui-label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle, ExternalLink } from 'lucide-react';
import { Link } from 'wouter';

const UiLabelExample = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <UiLabelHeading
            labelKey="uiLabels.example.title"
            defaultValue="UI Labels Example"
            context="Admin"
          />
        </CardTitle>
        <CardDescription>
          <UiLabel
            labelKey="uiLabels.example.description"
            defaultValue="This demonstrates how UI labels can be customized across the application"
            context="Admin"
          />
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <UiLabelHeading
            labelKey="uiLabels.example.section.heading"
            defaultValue="How UI Labels Work"
            defaultValue="How UI Labels Work"
            context="Admin"
            level={3}
            className="text-lg font-semibold"
          />
          
          <p>
            <UiLabel
              labelKey="uiLabels.example.section.paragraph"
              defaultValue="UI Labels allow you to customize text throughout the application without changing code. This is useful for white-labeling and rebranding the platform for different clients or use cases."
              context="Admin"
            />
          </p>
        </div>
        
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            <UiLabel
              labelKey="uiLabels.example.alert"
              defaultValue="Any text in the application can be customized using the UI Labels system."
              context="Admin"
            />
          </AlertDescription>
        </Alert>
        
        <div className="flex flex-col space-y-2">
          <Button className="w-full md:w-auto">
            <UiLabelButtonText
              labelKey="uiLabels.example.primaryButton"
              defaultValue="Primary Action"
              context="Admin"
            />
          </Button>
          
          <Button variant="outline" className="w-full md:w-auto">
            <UiLabelButtonText
              labelKey="uiLabels.example.secondaryButton"
              defaultValue="Secondary Action"
              context="Admin"
            />
          </Button>
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between">
        <Button variant="ghost" size="sm">
          <UiLabelButtonText
            labelKey="uiLabels.example.cancelButton"
            defaultValue="Cancel"
            context="Admin"
          />
        </Button>
        
        <Link href="/admin/ui-labels">
          <Button size="sm">
            <ExternalLink className="h-4 w-4 mr-2" />
            <UiLabelButtonText
              labelKey="uiLabels.example.manageButton"
              defaultValue="Manage UI Labels"
              context="Admin"
            />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default UiLabelExample;