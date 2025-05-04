import React, { useEffect, useState } from 'react';
import { useUiLabelExplorer } from '@/hooks/use-ui-label-explorer';
import { useUiLabel } from '@/hooks/use-ui-label';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Lightbulb, Save, Eye, Smartphone, Laptop, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const UiLabelExplorer: React.FC = () => {
  const { isExplorerMode, toggleExplorerMode, selectedLabel, setSelectedLabel } = useUiLabelExplorer();
  const { updateLabel } = useUiLabel();
  const [editValue, setEditValue] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [lastEdited, setLastEdited] = useState<string | null>(null);
  
  // When a label is selected, populate the edit value
  React.useEffect(() => {
    if (selectedLabel) {
      setEditValue(selectedLabel.value);
    }
  }, [selectedLabel]);
  
  const handleSaveLabel = async () => {
    if (selectedLabel && editValue) {
      await updateLabel(selectedLabel.id, editValue);
      
      // Store info about the last edit for feedback
      setLastEdited(`${selectedLabel.context}: ${selectedLabel.key}`);
      setShowSuccess(true);
      
      // Hide the success message after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
      
      setSelectedLabel(null);
    }
  };
  
  const handleCloseDialog = () => {
    setSelectedLabel(null);
  };
  
  return (
    <>
      {/* Success message toast */}
      {showSuccess && (
        <Alert className="bg-green-50 border-green-500 mb-4 shadow-lg animate-in fade-in slide-in-from-top-5 duration-300">
          <CheckCircle className="h-4 w-4 text-green-500" />
          <AlertTitle className="text-green-700">Label Updated Successfully</AlertTitle>
          <AlertDescription className="text-green-600">
            The label <span className="font-mono text-xs bg-green-100 px-1 py-0.5 rounded">{lastEdited}</span> has been updated.
            Changes are now live across the application.
          </AlertDescription>
        </Alert>
      )}
    
      <Card className="mb-4">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div>
            <CardTitle className="text-base font-semibold inline-flex items-center">
              <Lightbulb className="h-4 w-4 mr-2" />
              UI Label Explorer
            </CardTitle>
            <CardDescription>
              Interactive mode to find and edit labels directly in the UI
            </CardDescription>
          </div>
          <div className="flex items-center space-x-2">
            <Label htmlFor="explorer-mode" className="text-sm mr-2">Explorer Mode</Label>
            <Switch
              id="explorer-mode"
              checked={isExplorerMode}
              onCheckedChange={toggleExplorerMode}
            />
          </div>
        </CardHeader>
        <CardContent>
          {isExplorerMode ? (
            <div className="space-y-4">
              <Alert className="bg-primary/10 border-primary">
                <Eye className="h-4 w-4 text-primary" />
                <AlertDescription>
                  Explorer mode is <Badge variant="outline" className="ml-1 font-semibold text-primary">Active</Badge> 
                </AlertDescription>
              </Alert>
              
              <Tabs defaultValue="desktop" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="desktop" className="flex items-center gap-1">
                    <Laptop className="h-3 w-3" /> Desktop Instructions
                  </TabsTrigger>
                  <TabsTrigger value="mobile" className="flex items-center gap-1">
                    <Smartphone className="h-3 w-3" /> Mobile Instructions
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="desktop" className="mt-2">
                  <Alert>
                    <AlertDescription>
                      <span className="font-semibold">Desktop:</span> Hover over any text in the application to see its 
                      label key and context information. Click on it to open the edit dialog.
                    </AlertDescription>
                  </Alert>
                </TabsContent>
                
                <TabsContent value="mobile" className="mt-2">
                  <Alert>
                    <AlertDescription>
                      <span className="font-semibold">Mobile:</span> Tap and hold on any text element 
                      to select it for editing. The edit dialog will appear automatically when 
                      you release your finger.
                    </AlertDescription>
                  </Alert>
                </TabsContent>
              </Tabs>
            </div>
          ) : (
            <Alert>
              <AlertTitle>Enable Explorer Mode</AlertTitle>
              <AlertDescription>
                Toggle the switch above to activate Explorer Mode and identify labels directly in the user interface.
                Works on both desktop and mobile devices.
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
      
      {/* Edit dialog that appears when a label is clicked in explorer mode */}
      <Dialog open={!!selectedLabel} onOpenChange={(open) => !open && setSelectedLabel(null)}>
        <DialogContent className="sm:max-w-[500px]">
          {selectedLabel && (
            <>
              <DialogHeader>
                <DialogTitle>Edit UI Label</DialogTitle>
                <DialogDescription>
                  Modify this label's text to customize the user interface.
                </DialogDescription>
              </DialogHeader>
              
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label className="text-right font-semibold">Key</Label>
                  <div className="col-span-3 font-mono text-xs">{selectedLabel.key}</div>
                </div>
                
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label className="text-right font-semibold">Context</Label>
                  <div className="col-span-3">
                    <Badge variant="outline">{selectedLabel.context}</Badge>
                  </div>
                </div>
                
                <div className="grid grid-cols-4 items-start gap-4">
                  <Label className="text-right font-semibold pt-2">Default</Label>
                  <div className="col-span-3 text-muted-foreground text-sm border p-2 rounded-md">
                    {selectedLabel.defaultValue}
                  </div>
                </div>
                
                <div className="grid grid-cols-4 items-start gap-4">
                  <Label htmlFor="label-value" className="text-right font-semibold pt-2">
                    Custom Value
                  </Label>
                  <Textarea
                    id="label-value"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    className="col-span-3"
                    rows={3}
                  />
                </div>
              </div>
              
              <DialogFooter>
                <Button variant="outline" onClick={handleCloseDialog}>
                  Cancel
                </Button>
                <Button onClick={handleSaveLabel} disabled={!editValue} className="gap-1">
                  <Save className="h-4 w-4" />
                  Save Changes
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UiLabelExplorer;