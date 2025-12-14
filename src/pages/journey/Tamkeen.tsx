import JourneyStageTemplate from "@/components/templates/JourneyStageTemplate";
import stagesData from "@/data/journey/stages.json";

export default function Tamkeen() {
  const currentStage = stagesData.stages.find(s => s.id === "tamkeen")!;
  
  return (
    <JourneyStageTemplate 
      currentStage={currentStage} 
      allStages={stagesData.stages}
    />
  );
}
