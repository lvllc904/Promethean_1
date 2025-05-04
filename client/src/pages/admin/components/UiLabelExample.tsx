import React from 'react';
import { useUiLabel } from '@/hooks/use-ui-label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AlertCircle, CheckCircle2, Info } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface UiLabelExampleProps {
  isMinimal?: boolean;
}

const UiLabelExample: React.FC<UiLabelExampleProps> = ({ isMinimal = false }) => {
  const { getLabel } = useUiLabel();
  
  // Examples of using UI labels in different contexts
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {getLabel('example.title', 'Label Usage Examples')}
        </CardTitle>
        <CardDescription>
          {getLabel('example.description', 'See how UI labels work in different components')}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {!isMinimal && (
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>
              {getLabel('example.info.title', 'How UI Labels Work')}
            </AlertTitle>
            <AlertDescription>
              {getLabel(
                'example.info.description', 
                'UI Labels allow you to customize text throughout the application without changing code. Try editing a label to see it update here in real-time.'
              )}
            </AlertDescription>
          </Alert>
        )}
        
        <Tabs defaultValue="buttons">
          <TabsList className="w-full grid grid-cols-3">
            <TabsTrigger value="buttons">
              {getLabel('example.tabs.buttons', 'Buttons')}
            </TabsTrigger>
            <TabsTrigger value="alerts">
              {getLabel('example.tabs.alerts', 'Alerts')}
            </TabsTrigger>
            <TabsTrigger value="text">
              {getLabel('example.tabs.text', 'Text')}
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="buttons" className="space-y-4 pt-4">
            <div className="flex flex-wrap gap-2">
              <Button>
                {getLabel('example.buttons.primary', 'Primary Button')}
              </Button>
              <Button variant="secondary">
                {getLabel('example.buttons.secondary', 'Secondary Button')}
              </Button>
              <Button variant="destructive">
                {getLabel('example.buttons.destructive', 'Destructive Button')}
              </Button>
              <Button variant="outline">
                {getLabel('example.buttons.outline', 'Outline Button')}
              </Button>
            </div>
            {!isMinimal && (
              <Alert className="bg-muted">
                <AlertDescription className="text-xs">
                  {getLabel(
                    'example.buttons.usage', 
                    'Usage: `<Button>{getLabel("example.buttons.primary", "Primary Button")}</Button>`'
                  )}
                </AlertDescription>
              </Alert>
            )}
          </TabsContent>
          
          <TabsContent value="alerts" className="space-y-4 pt-4">
            <div className="space-y-4">
              <Alert variant="default">
                <Info className="h-4 w-4" />
                <AlertTitle>
                  {getLabel('example.alerts.info.title', 'Information')}
                </AlertTitle>
                <AlertDescription>
                  {getLabel('example.alerts.info.description', 'This is an informational alert message.')}
                </AlertDescription>
              </Alert>
              
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>
                  {getLabel('example.alerts.error.title', 'Error')}
                </AlertTitle>
                <AlertDescription>
                  {getLabel('example.alerts.error.description', 'Something went wrong! Please try again.')}
                </AlertDescription>
              </Alert>
              
              <Alert className="border-green-500">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <AlertTitle className="text-green-500">
                  {getLabel('example.alerts.success.title', 'Success')}
                </AlertTitle>
                <AlertDescription>
                  {getLabel('example.alerts.success.description', 'Operation completed successfully!')}
                </AlertDescription>
              </Alert>
            </div>
            {!isMinimal && (
              <Alert className="bg-muted">
                <AlertDescription className="text-xs">
                  {getLabel(
                    'example.alerts.usage', 
                    'Usage: `<AlertTitle>{getLabel("example.alerts.info.title", "Information")}</AlertTitle>`'
                  )}
                </AlertDescription>
              </Alert>
            )}
          </TabsContent>
          
          <TabsContent value="text" className="space-y-4 pt-4">
            <div className="space-y-4">
              <div>
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                  {getLabel('example.text.heading1', 'Main Heading')}
                </h1>
                <p className="text-sm text-muted-foreground">h1</p>
              </div>
              
              <div>
                <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                  {getLabel('example.text.heading2', 'Section Heading')}
                </h2>
                <p className="text-sm text-muted-foreground">h2</p>
              </div>
              
              <div>
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  {getLabel('example.text.heading3', 'Subsection Heading')}
                </h3>
                <p className="text-sm text-muted-foreground">h3</p>
              </div>
              
              <div>
                <p className="leading-7">
                  {getLabel(
                    'example.text.paragraph', 
                    'This is a paragraph of text that demonstrates how UI labels can be used for longer content. You can customize all text throughout the application using this system.'
                  )}
                </p>
                <p className="text-sm text-muted-foreground">paragraph</p>
              </div>
            </div>
            {!isMinimal && (
              <Alert className="bg-muted">
                <AlertDescription className="text-xs">
                  {getLabel(
                    'example.text.usage', 
                    'Usage: `<p>{getLabel("example.text.paragraph", "Default text...")}</p>`'
                  )}
                </AlertDescription>
              </Alert>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default UiLabelExample;