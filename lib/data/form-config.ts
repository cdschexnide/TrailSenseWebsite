/**
 * Form configuration for Formspree integration
 * Replace these IDs with your actual Formspree form IDs after creating forms at formspree.io
 */

export const formConfig = {
  quote: {
    // Create a form at formspree.io and replace with your form ID
    // Format: https://formspree.io/f/YOUR_FORM_ID
    endpoint: 'https://formspree.io/f/YOUR_QUOTE_FORM_ID',
    // For testing, you can use: 'https://formspree.io/f/test' (but it won't actually send)
  },
  contact: {
    // Create a form at formspree.io and replace with your form ID
    endpoint: 'https://formspree.io/f/YOUR_CONTACT_FORM_ID',
  },
}

// Property type options for quote form
export const propertyTypes = [
  { value: 'farm', label: 'Farm' },
  { value: 'ranch', label: 'Ranch' },
  { value: 'estate', label: 'Estate / Large Residential' },
  { value: 'recreation', label: 'Recreation / Trail System' },
  { value: 'commercial', label: 'Commercial Property' },
  { value: 'other', label: 'Other' },
]

// Property size options
export const propertySizes = [
  { value: 'small', label: 'Under 10 acres' },
  { value: 'medium', label: '10-50 acres' },
  { value: 'large', label: '50-100 acres' },
  { value: 'xlarge', label: '100-500 acres' },
  { value: 'xxlarge', label: '500+ acres' },
]

// Security needs checkboxes
export const securityNeeds = [
  { value: 'perimeter', label: 'Perimeter monitoring' },
  { value: 'entry', label: 'Entry point detection' },
  { value: 'trail', label: 'Trail access control' },
  { value: 'equipment', label: 'Equipment/asset protection' },
  { value: 'wildlife', label: 'Wildlife area protection' },
  { value: 'afterhours', label: 'After-hours security' },
]
