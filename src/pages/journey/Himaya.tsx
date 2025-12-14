import JourneyStageTemplate from "@/components/templates/JourneyStageTemplate";
import stagesData from "@/data/journey/stages.json";

export default function Himaya() {
  const currentStage = stagesData.stages.find(s => s.id === "himaya")!;
  
  return (
    <JourneyStageTemplate 
      currentStage={currentStage} 
      allStages={stagesData.stages}
    />
  );
}
