"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin } from "lucide-react";
import type { Location } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function LocationsSection({ locations }: { locations: Location[] }) {
  return (
    <section className="container mt-24 space-y-8">
      <div className="text-center md:mx-auto md:max-w-2xl md:text-left">
        <p className="text-sm uppercase tracking-[0.4em] text-primary/50">Адреси</p>
        <h2 className="mt-2 font-display text-3xl text-primary">Ателие и работно време</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {locations.map((location, index) => (
          <motion.div
            key={location.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="rounded-[2rem] border-primary/15 bg-cream-50/70 p-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <MapPin className="h-5 w-5" />
                  {location.title}
                </CardTitle>
                <p className="text-sm text-primary/70">{location.address}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm text-primary/80">
                  {location.hours.map((hour) => (
                    <li key={hour}>{hour}</li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="mt-4">
                  <Link href={location.mapsUrl} target="_blank" rel="noreferrer">
                    Отвори в Google Maps
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

