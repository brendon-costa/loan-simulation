
export const markControlsAsDirty = (controls: any) => {
  for (const controlName in controls) {
    if (!Array.isArray(controls[controlName].controls)) {
      controls[controlName].markAsDirty();
    } else {
      markControlsAsDirty(controls[controlName].controls);
    }
  }
}
