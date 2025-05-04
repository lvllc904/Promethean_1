import React from 'react';
import { useUiLabelExplorer } from '@/hooks/use-ui-label-explorer';
import { useUiLabel } from '@/hooks/use-ui-label';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Lightbulb, Save, Eye } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useState } from 'react';

const UiLabelExplorer: React.FC = () => {
  const { isExplorerMode, toggleExplorerMode, selectedLabel, setSelectedLabel } = useUiLabelExplorer();
  const { updateLabel } = useUiLabel();
  const [editValue, setEditValue] = useState('');
  
  // When a label is selected, populate the edit value
  React.useEffect(() => {
    if (selectedLabel) {
      setEditValue(selectedLabel.value);
    }
  }, [selectedLabel]);
  
  const handleSaveLabel = async () => {
    if (selectedLabel && editValue) {
      await updateLabel(selectedLabel.id, editValue);
      setSelectedLabel(null);
    }
  };
  
  const handleCloseDialog = () => {
    setSelectedLabel(null);
  };
  
  return (
    <>
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
            <Alert className="bg-primary/10 border-primary">
              <Eye className="h-4 w-4 text-primary" />
              <AlertDescription>
                Explorer mode is <Badge variant="outline" className="ml-1 font-semibold text-primary">Active</Badge> 
                <span className="block mt-1">
                  Hover over any text in the application to see its label key, then click to edit it.
                </span>
              </AlertDescription>
            </Alert>
          ) : (
            <Alert>
              <AlertDescription>
                Enable Explorer Mode to identify and edit labels directly in the user interface.
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