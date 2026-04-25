import ModalComponent from "@/components/molecules/Modal";
import { StepFooter } from "@/components/organisms/StepFooter";
import ScreenLayout from "@/components/template/screenlayout";
import { useStepOneState } from "../../../hooks/useStepOneState";
import { ConfirmModalContent } from "./components/ConfirmModalContent";
import { StepOneForm } from "./components/StepOneForm";
import { StepOneHeader } from "./components/StepOneHeader";

export default function StepOne() {
  const {
    petType,
    petForm,
    showConfirmModal,
    setShowConfirmModal,
    isSaving,
    selectedSizeId,
    selectedHealthIds,
    handleBreedChange,
    handleCityChange,
    handleSizeChange,
    handleHealthToggle,
    handleNext,
    handleSaveLocal,
  } = useStepOneState();

  return (
    <>
      <ScreenLayout
        footer={<StepFooter nextLabel="Siguiente" onNext={handleNext} />}
      >
        {/* title - add image */}
        <StepOneHeader petType={petType ?? ""} />
        {/* form: name, age, breed */}
        <StepOneForm
          breedValue={petForm.breed}
          cityValue={petForm.city}
          selectedSizeId={selectedSizeId}
          selectedHealthIds={selectedHealthIds}
          onBreedChange={handleBreedChange}
          onCityChange={handleCityChange}
          onSizeChange={handleSizeChange}
          onHealthToggle={handleHealthToggle}
        />
      </ScreenLayout>

      {/* Modal */}
      <ModalComponent
        visible={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
        modalContent={
          <ConfirmModalContent
            setShowConfirmModal={setShowConfirmModal}
            handleSaveLocal={handleSaveLocal}
            isSaving={isSaving}
          />
        }
      />
    </>
  );
}
