'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { formConfig, propertyTypes, propertySizes, securityNeeds } from '@/lib/data/form-config'
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'

const quoteSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  propertyType: z.string().min(1, 'Please select a property type'),
  propertySize: z.string().min(1, 'Please select a property size'),
  currentSecurity: z.string().optional(),
  securityNeeds: z.array(z.string()).optional(),
  message: z.string().optional(),
  _gotcha: z.string().optional(), // Honeypot field
})

type QuoteFormData = z.infer<typeof quoteSchema>

export function QuoteForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([])

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  })

  const onSubmit = async (data: QuoteFormData) => {
    setStatus('loading')

    // Don't submit if honeypot is filled
    if (data._gotcha) {
      setStatus('error')
      return
    }

    try {
      const response = await fetch(formConfig.quote.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          securityNeeds: selectedNeeds.join(', '),
        }),
      })

      if (response.ok) {
        setStatus('success')
        reset()
        setSelectedNeeds([])
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  const toggleNeed = (value: string) => {
    setSelectedNeeds((prev) =>
      prev.includes(value) ? prev.filter((n) => n !== value) : [...prev, value]
    )
  }

  if (status === 'success') {
    return (
      <div className="rounded-lg bg-primary-50 p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-primary-600 mb-4" />
        <h3 className="text-xl font-semibold text-earth-900 mb-2">Quote Request Received!</h3>
        <p className="text-earth-600">
          Thank you for your interest. Our team will review your requirements and get back to you within 24 hours with a custom quote.
        </p>
        <Button
          variant="outline"
          onClick={() => setStatus('idle')}
          className="mt-6"
        >
          Submit Another Request
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Honeypot field (hidden from users) */}
      <input
        type="text"
        {...register('_gotcha')}
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Name */}
      <div>
        <Label htmlFor="name">
          Full Name <span className="text-destructive">*</span>
        </Label>
        <Input
          id="name"
          {...register('name')}
          placeholder="John Smith"
          className="mt-2"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>

      {/* Email & Phone */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="email">
            Email Address <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            {...register('email')}
            placeholder="john@example.com"
            className="mt-2"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="phone">Phone Number (Optional)</Label>
          <Input
            id="phone"
            type="tel"
            {...register('phone')}
            placeholder="(555) 123-4567"
            className="mt-2"
          />
        </div>
      </div>

      {/* Property Type & Size */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="propertyType">
            Property Type <span className="text-destructive">*</span>
          </Label>
          <Select onValueChange={(value) => setValue('propertyType', value)}>
            <SelectTrigger className="mt-2">
              <SelectValue placeholder="Select property type" />
            </SelectTrigger>
            <SelectContent>
              {propertyTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.propertyType && (
            <p className="mt-1 text-sm text-destructive">{errors.propertyType.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="propertySize">
            Property Size <span className="text-destructive">*</span>
          </Label>
          <Select onValueChange={(value) => setValue('propertySize', value)}>
            <SelectTrigger className="mt-2">
              <SelectValue placeholder="Select property size" />
            </SelectTrigger>
            <SelectContent>
              {propertySizes.map((size) => (
                <SelectItem key={size.value} value={size.value}>
                  {size.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.propertySize && (
            <p className="mt-1 text-sm text-destructive">{errors.propertySize.message}</p>
          )}
        </div>
      </div>

      {/* Current Security Setup */}
      <div>
        <Label htmlFor="currentSecurity">Current Security Setup (Optional)</Label>
        <Textarea
          id="currentSecurity"
          {...register('currentSecurity')}
          placeholder="Describe any existing security systems or cameras..."
          className="mt-2"
          rows={3}
        />
      </div>

      {/* Security Needs */}
      <div>
        <Label>Specific Security Needs (Optional)</Label>
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {securityNeeds.map((need) => (
            <div key={need.value} className="flex items-center space-x-2">
              <input
                type="checkbox"
                id={need.value}
                checked={selectedNeeds.includes(need.value)}
                onChange={() => toggleNeed(need.value)}
                className="h-4 w-4 rounded border-earth-300 text-primary-600 focus:ring-primary-600"
              />
              <label
                htmlFor={need.value}
                className="text-sm text-earth-700 cursor-pointer"
              >
                {need.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Message */}
      <div>
        <Label htmlFor="message">Additional Information (Optional)</Label>
        <Textarea
          id="message"
          {...register('message')}
          placeholder="Tell us more about your monitoring needs, specific challenges, or questions..."
          className="mt-2"
          rows={4}
        />
      </div>

      {/* Submit Button */}
      <div>
        <Button
          type="submit"
          size="lg"
          className="w-full"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Submitting...
            </>
          ) : (
            'Request Quote'
          )}
        </Button>

        {status === 'error' && (
          <div className="mt-4 rounded-lg bg-destructive/10 p-4 flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
            <div className="text-sm text-destructive">
              <p className="font-semibold">Submission failed</p>
              <p>Please try again or contact us directly at info@trailsense.com</p>
            </div>
          </div>
        )}
      </div>
    </form>
  )
}
