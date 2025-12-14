import JourneyStageTemplate from "@/components/templates/JourneyStageTemplate";
import stagesData from "@/data/journey/stages.json";

export default function Manaa() {
  const currentStage = stagesData.stages.find(s => s.id === "manaa")!;
  
  return (
    <JourneyStageTemplate 
      currentStage={currentStage} 
      allStages={stagesData.stages}
    />
  );
}
