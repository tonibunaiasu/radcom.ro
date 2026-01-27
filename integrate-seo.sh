#!/bin/bash

# OptiFare.tsx
sed -i '1a import { SEOHead } from "@/components/SEOHead";' client/src/pages/OptiFare.tsx
sed -i 's|  return (|  return (\n    <div className="min-h-screen flex flex-col">\n      <SEOHead titleKey="seo.optifare.title" descriptionKey="seo.optifare.description" path="/servicii/optifare" />|' client/src/pages/OptiFare.tsx

# Exact.tsx  
sed -i '1a import { SEOHead } from "@/components/SEOHead";' client/src/pages/Exact.tsx
sed -i 's|  return (|  return (\n    <div className="min-h-screen flex flex-col">\n      <SEOHead titleKey="seo.exact.title" descriptionKey="seo.exact.description" path="/servicii/exact" />|' client/src/pages/Exact.tsx

# Servicii.tsx
sed -i '1a import { SEOHead } from "@/components/SEOHead";' client/src/pages/Servicii.tsx
sed -i 's|  return (|  return (\n    <div className="min-h-screen flex flex-col">\n      <SEOHead titleKey="seo.services.title" descriptionKey="seo.services.description" path="/servicii" />|' client/src/pages/Servicii.tsx

echo "SEOHead integrated successfully"
