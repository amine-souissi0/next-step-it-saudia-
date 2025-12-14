import JourneyStageTemplate from "@/components/templates/JourneyStageTemplate";
import stagesData from "@/data/journey/stages.json";

export default function Riyada() {
  const currentStage = stagesData.stages.find(s => s.id === "riyada")!;
  
  return (
    <JourneyStageTemplate 
      currentStage={currentStage} 
      allStages={stagesData.stages}
    />
  );
}
