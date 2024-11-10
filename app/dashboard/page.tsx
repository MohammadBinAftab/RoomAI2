'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ImageIcon, Wand2 } from "lucide-react";
import { useState } from "react";

export default function DashboardPage() {
  const [selectedModel, setSelectedModel] = useState('stable-diffusion');
  
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <p className="text-muted-foreground">Generate and transform your room designs</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <ImageIcon className="h-8 w-8" />
            <div>
              <h2 className="font-semibold">New Generation</h2>
              <p className="text-sm text-muted-foreground">Create a new room design</p>
            </div>
          </div>
          <select 
            className="w-full p-2 mb-4 border rounded"
            value={selectedModel}
            onChange={(e) => setSelectedModel(e.target.value)}
          >
            <option value="stable-diffusion">Stable Diffusion 3</option>
            <option value="dalle2">DALL-E 2</option>
          </select>
          <Button className="w-full">
            <Wand2 className="w-4 h-4 mr-2" />
            Generate
          </Button>
        </Card>

        <Card className="p-6">
          <h2 className="font-semibold mb-4">Recent Generations</h2>
          <p className="text-sm text-muted-foreground">No recent generations</p>
        </Card>

        <Card className="p-6">
          <h2 className="font-semibold mb-4">Credits</h2>
          <p className="text-2xl font-bold mb-2">0</p>
          <Button variant="outline" className="w-full">Buy Credits</Button>
        </Card>
      </div>
    </div>
  );
}