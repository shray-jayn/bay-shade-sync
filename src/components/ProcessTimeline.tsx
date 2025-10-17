import { Ruler, Factory, Wrench, Settings, HeadphonesIcon } from 'lucide-react';

const steps = [
  {
    icon: Ruler,
    title: 'Measure',
    description: 'Precision in-home measurement and consultation',
  },
  {
    icon: Factory,
    title: 'Manufacture',
    description: 'Local Bay Area production to your exact specs',
  },
  {
    icon: Wrench,
    title: 'Install',
    description: 'Expert installation by certified technicians',
  },
  {
    icon: Settings,
    title: 'Configure',
    description: 'Smart home setup and programming',
  },
  {
    icon: HeadphonesIcon,
    title: 'Support',
    description: 'Ongoing local service and assistance',
  },
];

export const ProcessTimeline = () => {
  return (
    <section id="process" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold font-display">
            Our Process
          </h2>
          <p className="text-lg text-muted-foreground">
            From initial consultation to ongoing support, we're with you every step
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connection line - desktop only */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="relative text-center space-y-4 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative inline-flex">
                    <div className="w-24 h-24 rounded-lg bg-primary/10 flex items-center justify-center group hover:bg-primary/20 transition-colors">
                      <Icon className="h-10 w-10 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold font-display">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
