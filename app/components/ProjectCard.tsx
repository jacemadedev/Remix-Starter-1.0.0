import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "~/components/ui/card";
import { YouTubeEmbed } from '~/components/YouTubeEmbed';

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  videoId: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  subtitle,
  description,
  videoId,
}) => (
  <Card className="overflow-hidden border-0 bg-card">
    <CardHeader className="p-0">
      <YouTubeEmbed videoId={videoId} />
    </CardHeader>
    <CardContent className="p-6">
      <div className="flex items-start gap-4">
        <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
          C
        </div>
        <div>
          <h3 className="font-semibold text-xl text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
      </div>
      <p className="mt-4 text-muted-foreground">{description}</p>
    </CardContent>
    <CardFooter className="p-6 pt-0">
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="rounded-full">
            Add to Composers.dev now <ArrowRight className="ml-2 h-3 w-3" />
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="rounded-full"
            onClick={() => window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank')}
          >
            Preview <ExternalLink className="ml-2 h-3 w-3" />
          </Button>
        </div>
      </div>
    </CardFooter>
  </Card>
);