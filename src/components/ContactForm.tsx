import { useState, useCallback, useRef } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { useAriaAnnouncer } from '../hooks/useAriaAnnouncer';

interface FormData {
  nombre: string;
  telefono: string;
  email: string;
  plan: string;
}

interface FormErrors {
  nombre?: string;
  telefono?: string;
  email?: string;
  plan?: string;
}

const PLANS = [
  { value: '', label: 'Selecciona un plan' },
  { value: 'basico', label: 'Plan Básico: Página Web de Una Sola Página - $300.000 COP' },
  { value: 'express', label: 'Plan Rápido: Página Web + Entrega Express 72h - $360.000 COP' },
  { value: 'completo', label: 'Plan Completo: Página Web + Logo + Redacción - $430.000 COP' },
];

function validateField(name: keyof FormData, value: string): string | undefined {
  switch (name) {
    case 'nombre':
      if (!value.trim()) return 'El nombre es obligatorio';
      if (value.trim().length < 2) return 'El nombre debe tener al menos 2 caracteres';
      return undefined;
    case 'telefono':
      if (!value.trim()) return 'El teléfono es obligatorio';
      if (!/^(\+?57)?[\s-]?\d{3}[\s-]?\d{3}[\s-]?\d{4}$/.test(value.replace(/\s/g, '')))
        return 'Ingresa un número de teléfono colombiano válido (ej: 305 411 5138)';
      return undefined;
    case 'email':
      if (!value.trim()) return 'El correo electrónico es obligatorio';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
        return 'Ingresa un correo electrónico válido';
      return undefined;
    case 'plan':
      if (!value) return 'Selecciona un plan';
      return undefined;
    default:
      return undefined;
  }
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    telefono: '',
    email: '',
    plan: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const announce = useAriaAnnouncer();

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));

      if (touched[name]) {
        const error = validateField(name as keyof FormData, value);
        setErrors((prev) => ({ ...prev, [name]: error }));
      }
    },
    [touched]
  );

  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name as keyof FormData, value);
    setErrors((prev) => ({ ...prev, [name]: error }));

    if (error) {
      announce(`Error en ${name}: ${error}`);
    }
  }, [announce]);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      const newErrors: FormErrors = {};
      (Object.keys(formData) as (keyof FormData)[]).forEach((key) => {
        const error = validateField(key, formData[key]);
        if (error) newErrors[key] = error;
      });

      setErrors(newErrors);
      setTouched({ nombre: true, telefono: true, email: true, plan: true });

      if (Object.keys(newErrors).length > 0) {
        const firstErrorField = Object.keys(newErrors)[0];
        const el = formRef.current?.querySelector<HTMLElement>(`[name="${firstErrorField}"]`);
        el?.focus();
        announce(`Hay ${Object.keys(newErrors).length} errores en el formulario. Revisa los campos marcados.`);
        return;
      }

      setSubmitting(true);

      const planLabel = PLANS.find((p) => p.value === formData.plan)?.label || formData.plan;
      const message = `Hola, soy ${formData.nombre}. Estoy interesado en: ${planLabel}. Mi teléfono es ${formData.telefono} y mi email ${formData.email}.`;
      const waUrl = `https://wa.me/573054115138?text=${encodeURIComponent(message)}`;

      setTimeout(() => {
        setSubmitting(false);
        setSubmitted(true);
        announce('Formulario enviado correctamente. Redirigiendo a WhatsApp.');
        window.open(waUrl, '_blank', 'noopener,noreferrer');
      }, 600);
    },
    [formData, announce]
  );

  if (submitted) {
    return (
      <section id="contacto" className="py-16 md:py-24 bg-gradient-to-b from-black to-slate-950 relative" aria-labelledby="contacto-heading">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-transparent" aria-hidden="true" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-slate-900/60 backdrop-blur-lg border-2 border-emerald-500/30 rounded-3xl p-8 md:p-12" role="alert">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500/20 rounded-full border border-emerald-500/30 mb-6">
                <CheckCircle2 className="h-8 w-8 text-emerald-400" aria-hidden="true" />
              </div>
              <h2 id="contacto-heading" className="text-2xl md:text-3xl font-bold text-white mb-4">
                Datos enviados correctamente
              </h2>
              <p className="text-slate-300 text-lg mb-6">
                Te hemos redirigido a WhatsApp para que puedas hablar directamente con nuestro equipo.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ nombre: '', telefono: '', email: '', plan: '' });
                  setTouched({});
                  setErrors({});
                }}
                className="btn-primary"
              >
                Enviar otro mensaje
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="py-16 md:py-24 bg-gradient-to-b from-black to-slate-950 relative" aria-labelledby="contacto-heading" tabIndex={-1}>
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-transparent" aria-hidden="true" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 id="contacto-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Solicita tu página web
              <span className="block mt-2 text-emerald-400">ahora mismo</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-300">
              Completa el formulario y te contactamos por WhatsApp
            </p>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-lg border-2 border-emerald-500/30 rounded-3xl p-6 md:p-10 shadow-2xl shadow-emerald-500/10">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              noValidate
              aria-label="Formulario de contacto para solicitar página web"
            >
              <div className="space-y-6">
                <FormField
                  label="Nombre completo"
                  name="nombre"
                  type="text"
                  placeholder="Ej: Juan Pérez"
                  value={formData.nombre}
                  error={errors.nombre}
                  touched={touched.nombre}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="name"
                  required
                />

                <FormField
                  label="Teléfono (Colombia)"
                  name="telefono"
                  type="tel"
                  placeholder="Ej: 305 411 5138"
                  value={formData.telefono}
                  error={errors.telefono}
                  touched={touched.telefono}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="tel"
                  required
                  inputMode="tel"
                  description="Número celular colombiano de 10 dígitos"
                />

                <FormField
                  label="Correo electrónico"
                  name="email"
                  type="email"
                  placeholder="Ej: juan@miempresa.com"
                  value={formData.email}
                  error={errors.email}
                  touched={touched.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="email"
                  required
                />

                <div>
                  <label htmlFor="plan" className="block text-sm font-semibold text-slate-200 mb-2">
                    Tipo de plan <span className="text-red-400" aria-hidden="true">*</span>
                    <span className="sr-only">(obligatorio)</span>
                  </label>
                  <select
                    id="plan"
                    name="plan"
                    value={formData.plan}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    aria-invalid={touched.plan && !!errors.plan}
                    aria-describedby={errors.plan && touched.plan ? 'plan-error' : undefined}
                    className={`w-full px-4 py-3 bg-slate-800/80 border rounded-xl text-white placeholder-slate-500 focus-ring transition-colors ${
                      touched.plan && errors.plan
                        ? 'border-red-400'
                        : 'border-emerald-500/30 hover:border-emerald-500/50'
                    }`}
                  >
                    {PLANS.map((plan) => (
                      <option key={plan.value} value={plan.value} disabled={!plan.value}>
                        {plan.label}
                      </option>
                    ))}
                  </select>
                  {touched.plan && errors.plan && (
                    <p id="plan-error" className="mt-2 text-sm text-red-400 flex items-center gap-1.5" role="alert">
                      <AlertCircle className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                      {errors.plan}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-lg font-bold rounded-xl shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:from-emerald-600 hover:to-emerald-700 transform hover:scale-[1.02] transition-all duration-300 focus-ring disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                  aria-busy={submitting}
                >
                  {submitting ? (
                    <>
                      <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-3" aria-hidden="true" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" aria-hidden="true" />
                      Enviar y hablar por WhatsApp
                    </>
                  )}
                </button>
              </div>

              <p className="mt-4 text-center text-slate-400 text-sm">
                Al enviar, serás redirigido a WhatsApp para confirmar tu solicitud
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

interface FormFieldProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  error?: string;
  touched?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  autoComplete: string;
  required?: boolean;
  inputMode?: 'tel' | 'email' | 'text';
  description?: string;
}

const FormField = ({
  label,
  name,
  type,
  placeholder,
  value,
  error,
  touched,
  onChange,
  onBlur,
  autoComplete,
  required,
  inputMode,
  description,
}: FormFieldProps) => {
  const errorId = `${name}-error`;
  const descId = `${name}-desc`;
  const hasError = touched && !!error;

  const describedBy = [description ? descId : null, hasError ? errorId : null]
    .filter(Boolean)
    .join(' ') || undefined;

  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-slate-200 mb-2">
        {label}{' '}
        {required && (
          <>
            <span className="text-red-400" aria-hidden="true">*</span>
            <span className="sr-only">(obligatorio)</span>
          </>
        )}
      </label>
      {description && (
        <p id={descId} className="text-xs text-slate-400 mb-1.5">
          {description}
        </p>
      )}
      <input
        id={name}
        name={name}
        type={type}
        inputMode={inputMode}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        autoComplete={autoComplete}
        required={required}
        aria-invalid={hasError}
        aria-describedby={describedBy}
        className={`w-full px-4 py-3 bg-slate-800/80 border rounded-xl text-white placeholder-slate-500 focus-ring transition-colors ${
          hasError
            ? 'border-red-400'
            : 'border-emerald-500/30 hover:border-emerald-500/50'
        }`}
      />
      {hasError && (
        <p id={errorId} className="mt-2 text-sm text-red-400 flex items-center gap-1.5" role="alert">
          <AlertCircle className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  );
};

export default ContactForm;
