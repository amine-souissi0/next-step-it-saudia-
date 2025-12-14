import JourneyStageTemplate from "@/components/templates/JourneyStageTemplate";
import stagesData from "@/data/journey/stages.json";

export default function Thiqah() {
  const currentStage = stagesData.stages.find(s => s.id === "thiqah")!;
  
  return (
    <JourneyStageTemplate 
      currentStage={currentStage} 
      allStages={stagesData.stages}
    />
  );
}
