import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';
import { useQuoteForm } from '@/contexts/QuoteFormContext';
import { CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

export const QuoteFormModal = () => {
  const { isOpen, closeQuoteForm, formSource } = useQuoteForm();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    street: '',
    city: '',
    zip: '',
    interestType: [] as string[],
    products: [] as string[],
    motorization: '',
    smartHome: '',
    preferredDate: '',
    preferredTime: '',
    privacyConsent: false,
    smsOptIn: false,
  });

  const handleClose = () => {
    closeQuoteForm();
    setTimeout(() => {
      setStep(1);
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        street: '',
        city: '',
        zip: '',
        interestType: [],
        products: [],
        motorization: '',
        smartHome: '',
        preferredDate: '',
        preferredTime: '',
        privacyConsent: false,
        smsOptIn: false,
      });
    }, 300);
  };

  const handleSubmit = () => {
    // Validate required fields
    if (!formData.privacyConsent) {
      toast({
        title: "Privacy consent required",
        description: "Please agree to our privacy policy to continue.",
        variant: "destructive",
      });
      return;
    }

    // Track form submission
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'form_submit_success', {
        source: formSource,
      });
    }

    setSubmitted(true);
    toast({
      title: "Quote request submitted!",
      description: "We'll call you within 1 business day.",
    });
  };

  const nextStep = () => {
    if (step === 1 && (!formData.name || !formData.phone)) {
      toast({
        title: "Required fields",
        description: "Please fill in your name and phone number.",
        variant: "destructive",
      });
      return;
    }
    setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const toggleInterest = (value: string) => {
    setFormData({
      ...formData,
      interestType: formData.interestType.includes(value)
        ? formData.interestType.filter((v) => v !== value)
        : [...formData.interestType, value],
    });
  };

  const toggleProduct = (value: string) => {
    setFormData({
      ...formData,
      products: formData.products.includes(value)
        ? formData.products.filter((v) => v !== value)
        : [...formData.products, value],
    });
  };

  if (submitted) {
    return (
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md">
          <div className="text-center py-8 space-y-6">
            <div className="flex justify-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold font-display">Request Received!</h3>
              <p className="text-muted-foreground">
                We'll call you within 1 business day to discuss your project and schedule a consultation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button onClick={handleClose} variant="outline" className="rounded-lg">
                Close
              </Button>
              <a href="tel:+16578951094">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg w-full sm:w-auto">
                  Call Now: (657) 895-1094
                </Button>
              </a>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display">Get Your Free Quote</DialogTitle>
          <div className="flex items-center space-x-2 mt-4">
            {[1, 2, 3, 4, 5].map((s) => (
              <div
                key={s}
                className={`h-1 flex-1 rounded-full transition-colors ${
                  s <= step ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </DialogHeader>

        <div className="py-6 space-y-6">
          {/* Step 1: Contact Info */}
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your full name"
                  className="rounded-lg"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(555) 123-4567"
                  className="rounded-lg"
                />
              </div>
              <div>
                <Label htmlFor="email">Email (optional)</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@example.com"
                  className="rounded-lg"
                />
              </div>
            </div>
          )}

          {/* Step 2: Address */}
          {step === 2 && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="street">Street Address</Label>
                <Input
                  id="street"
                  value={formData.street}
                  onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                  placeholder="123 Main St"
                  className="rounded-lg"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="Belmont"
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <Label htmlFor="zip">ZIP Code</Label>
                  <Input
                    id="zip"
                    value={formData.zip}
                    onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                    placeholder="94002"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Interest */}
          {step === 3 && (
            <div className="space-y-4">
              <div>
                <Label className="mb-3 block">What interests you?</Label>
                <div className="space-y-2">
                  {['Interior Blinds', 'Exterior Patio Blinds', 'Motorized Awnings', 'Smart Home Integration'].map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <Checkbox
                        id={option}
                        checked={formData.interestType.includes(option)}
                        onCheckedChange={() => toggleInterest(option)}
                      />
                      <Label htmlFor={option} className="cursor-pointer font-normal">
                        {option}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Schedule */}
          {step === 4 && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="preferredDate">Preferred Consultation Date</Label>
                <Input
                  id="preferredDate"
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="rounded-lg"
                />
              </div>
              <div>
                <Label htmlFor="preferredTime">Preferred Time</Label>
                <select
                  id="preferredTime"
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                >
                  <option value="">Select a time</option>
                  <option value="morning">Morning (8am - 12pm)</option>
                  <option value="afternoon">Afternoon (12pm - 5pm)</option>
                  <option value="evening">Evening (5pm - 7pm)</option>
                </select>
              </div>
            </div>
          )}

          {/* Step 5: Review & Consent */}
          {step === 5 && (
            <div className="space-y-4">
              <div className="bg-muted p-4 rounded-lg space-y-2 text-sm">
                <div><strong>Name:</strong> {formData.name}</div>
                <div><strong>Phone:</strong> {formData.phone}</div>
                {formData.email && <div><strong>Email:</strong> {formData.email}</div>}
                {formData.city && <div><strong>City:</strong> {formData.city}</div>}
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="privacy"
                    checked={formData.privacyConsent}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, privacyConsent: checked as boolean })
                    }
                  />
                  <Label htmlFor="privacy" className="cursor-pointer text-sm font-normal leading-relaxed">
                    I agree to the privacy policy and consent to being contacted about this quote request. *
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="sms"
                    checked={formData.smsOptIn}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, smsOptIn: checked as boolean })
                    }
                  />
                  <Label htmlFor="sms" className="cursor-pointer text-sm font-normal leading-relaxed">
                    I'd like to receive SMS updates about my consultation (optional)
                  </Label>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between pt-4 border-t">
          {step > 1 && (
            <Button onClick={prevStep} variant="outline" className="rounded-lg">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back
            </Button>
          )}
          <div className="flex-1" />
          {step < 5 ? (
            <Button onClick={nextStep} className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg">
              Next
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg"
              disabled={!formData.privacyConsent}
            >
              Submit Request
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
