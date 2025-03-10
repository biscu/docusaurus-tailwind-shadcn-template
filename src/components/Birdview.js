import React, { useState, useMemo } from "react";
import { Search, Filter, Bird } from "lucide-react";
import { imageData } from "../data/imageData";
import { useColorMode } from "@docusaurus/theme-common";
import SearchBar from "./SearchBar/SearchBar";
import Select from "./Select/Select";

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
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedFlow, setSelectedFlow] = useState("");
  const [selectedComponents, setSelectedComponents] = useState([]);
  const [selectedTag, setSelectedTag] = useState("");
  const [selectedComponent, setSelectedComponent] = useState("");

  const allTags = useMemo(
    () => Array.from(new Set(imageData.flatMap((img) => img.tags))),
    []
  );

  const allFlows = useMemo(
    () => Array.from(new Set(imageData.map((img) => img.flow))),
    []
  );

  const allComponents = useMemo(
    () => Array.from(new Set(imageData.flatMap((img) => img.components))),
    []
  );

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

      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.every((tag) => image.tags.includes(tag));

      const matchesFlow = !selectedFlow || image.flow === selectedFlow;

      const matchesComponents =
        selectedComponents.length === 0 ||
        selectedComponents.every((comp) => image.components.includes(comp));

      const matchesSelectedTag =
        !selectedTag || image.tags.includes(selectedTag);

      const matchesSelectedComponent =
        !selectedComponent || image.components.includes(selectedComponent);

      return (
        matchesSearch &&
        matchesTags &&
        matchesFlow &&
        matchesComponents &&
        matchesSelectedTag &&
        matchesSelectedComponent
      );
    });
  }, [
    searchQuery,
    selectedTags,
    selectedFlow,
    selectedComponents,
    selectedTag,
    selectedComponent,
  ]);

  const handleTagSelect = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleComponentSelect = (component) => {
    setSelectedComponents((prev) =>
      prev.includes(component)
        ? prev.filter((c) => c !== component)
        : [...prev, component]
    );
  };

  const handleTagChange = (event) => {
    setSelectedTag(event.target.value);
  };

  const handleComponentChange = (event) => {
    setSelectedComponent(event.target.value);
  };

  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="mb-8 space-y-4">
        <Bird size={24} />
        <h1 className="text-2xl font-bold">Birdview</h1>
        <div className="flex md:flex-row gap-4 pb-12 max-w-full flex-col">
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            placeholder="Search screens..."
          />
          <div className="flex flex-row gap-4">
            <Select
                options={[
                  { value: "", label: "All tags" },
                  ...allTags.map((tag) => ({ value: tag, label: tag })),
                ]}
                value={selectedTag}
                onChange={handleTagChange}
              />
            <Select
                options={[
                  { value: "", label: "All components" },
                  ...allComponents.map((component) => ({
                    value: component,
                    label: component,
                  })),
                ]}
                value={selectedComponent}
                onChange={handleComponentChange}
              />
            <Select
                options={[
                  { value: "", label: "All flows" },
                  ...allFlows.map((flow) => ({ value: flow, label: flow })),
                ]}
                value={selectedFlow}
                onChange={(e) => setSelectedFlow(e.target.value)}
              />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
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
