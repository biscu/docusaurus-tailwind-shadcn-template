import React, { useState, useMemo } from "react";
import { Search, Filter, Bird } from "lucide-react";
import { imageData } from "../data/imageData";
import { useColorMode } from "@docusaurus/theme-common";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectGroup,
  SelectValue,
} from "./ui/select"

const ImageCard = ({ image }) => {
  const imageSrc =
    useColorMode().colorMode === "dark" ? image.dark : image.light;

  return (
    <div className="overflow-hidden rounded-lg shadow-lg">
      <div className="relative aspect-[9/20] overflow-hidden">
        <img src={imageSrc} className="object-cover w-full h-full" />
      </div>
    </div>
  );
};

export const BirdView = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("All tag");
  const [selectedComponent, setSelectedComponent] = useState("All component");
  const [selectedFlow, setSelectedFlow] = useState("All flow");

  const filteredImages = useMemo(() => {
    return imageData.filter((image) => {
      const matchesSearch =
        searchQuery === "" ||
        image.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        ) ||
        image.flow.toLowerCase().includes(searchQuery.toLowerCase()) ||
        image.components.some((comp) =>
          comp.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesTag =
        selectedTag === "All tag" ||
        image.tags.some((tag) => tag === selectedTag);

      const matchesComponent =
        selectedComponent === "All component" ||
        image.components.some((comp) => comp === selectedComponent);

      const matchesFlow =
        selectedFlow === "All flow" ||
        image.flow === selectedFlow;

      return (
        matchesSearch && matchesTag && matchesComponent && matchesFlow
      );
    });
  }, [
    searchQuery,
    selectedTag,
    selectedComponent,
    selectedFlow,
  ]);

  return (
    <div className="container px-4 py-8 mx-auto mt-12">
      <div className="mb-8 space-y-4">
        <Bird size={24} />
        <h1 className="text-2xl font-bold">Birdview</h1>
        <div className="flex flex-col md:flex-row gap-4 pb-12 max-w-full">
          <Input type="text" placeholder="Search screens..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          <Select value={selectedTag} onValueChange={(value) => setSelectedTag(value)}>
            <SelectTrigger>
              <div className="flex items-center gap-2">
                <span>{selectedTag}</span>
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="All tag">All tag</SelectItem>
                {imageData.flatMap((image) => image.tags).filter((tag, index, self) => self.indexOf(tag) === index).map((tag) => (
                  <SelectItem key={tag} value={tag}>{tag}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select value={selectedComponent} onValueChange={(value) => setSelectedComponent(value)}>
            <SelectTrigger>
              <div className="flex items-center gap-2">
                <span>{selectedComponent}</span>
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="All component">All component</SelectItem>
                {imageData.flatMap((image) => image.components).filter((comp, index, self) => self.indexOf(comp) === index).map((comp) => (
                  <SelectItem key={comp} value={comp}>{comp}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select value={selectedFlow} onValueChange={(value) => setSelectedFlow(value)}>
            <SelectTrigger>
              <div className="flex items-center gap-2">
                <span>{selectedFlow}</span>
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="All flow">All flow</SelectItem>
                {imageData.map((image) => image.flow).filter((flow, index, self) => self.indexOf(flow) === index).map((flow) => (
                  <SelectItem key={flow} value={flow}>{flow}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredImages.map((image, index) => (
          <ImageCard key={index} image={image} />
        ))}
      </div>

      {filteredImages.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-lg text-gray-500">
            No screenshots match your search criteria
          </p>
        </div>
      )}
    </div>
  );
};
