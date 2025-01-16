import { useState } from "react";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import Editor from "@monaco-editor/react";
import { doc, collection, addDoc } from "firebase/firestore";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";
import { initializeFirebase, createFirebaseConfig, getDb } from "@/lib/firebase";
import { generateDummyData } from "@/lib/generator";
import { useI18n, translations } from "@/lib/i18n";

interface FormData {
  path: string;
  count: number;
}

interface FirebaseInitResult {
  success: boolean;
  error?: {
    message?: string;
  };
}

export default function Home() {
  const [configOpen, setConfigOpen] = useState(true);
  const [apiKey, setApiKey] = useState(() => localStorage.getItem('firebase_apiKey') || "");
  const [authDomain, setAuthDomain] = useState(() => localStorage.getItem('firebase_authDomain') || "");
  const [projectId, setProjectId] = useState(() => localStorage.getItem('firebase_projectId') || "");

  const [template, setTemplate] = useState("{\n  \"name\": \"{{name}}\",\n  \"email\": \"{{email}}\"\n}");
  const [generatedData, setGeneratedData] = useState("");
  const [isInitialized, setIsInitialized] = useState(false);

  const { toast } = useToast();
  const { lang, setLang } = useI18n();
  const form = useForm<FormData>({
    defaultValues: {
      path: "users",
      count: 10
    }
  });

  const handleConfigSubmit = async () => {
    try {
      if (!apiKey || !authDomain || !projectId) {
        toast({
          variant: "destructive",
          title: translations[lang].toast.missingFields,
          description: translations[lang].toast.fillAllFields
        });
        return;
      }

      const config = {
        apiKey,
        authDomain,
        projectId
      };

      const result: FirebaseInitResult = initializeFirebase(config);
      if (result.success) {
        setIsInitialized(true);
        setConfigOpen(false);
        toast({
          title: translations[lang].toast.firebaseInitialized,
          description: translations[lang].toast.successfullyConnected
        });
      } else {
        toast({
          variant: "destructive",
          title: translations[lang].toast.initializationFailed,
          description: typeof result.error === 'object' && result.error !== null 
            ? (result.error as { message?: string }).message || translations[lang].toast.unknownError
            : translations[lang].toast.unknownError
        });
      }
    } catch (e: any) {
      toast({
        variant: "destructive",
        title: translations[lang].toast.unknownError,
        description: e?.message || String(e)
      });
    }
  };

  const handleGenerate = async (data: FormData) => {
    try {
      const templateObj = JSON.parse(template);
      const generated = generateDummyData(templateObj, data.count);
      setGeneratedData(JSON.stringify(generated, null, 2));
    } catch (e: any) {
      toast({
        variant: "destructive",
        title: translations[lang].toast.unknownError,
        description: e?.message || String(e)
      });
    }
  };

  const handleInsert = async (data: FormData) => {
    if (!isInitialized) {
      toast({
        variant: "destructive",
        title: translations[lang].toast.notInitialized,
        description: translations[lang].toast.initializeFirst
      });
      return;
    }

    try {
      const db = getDb();
      const collectionRef = collection(db, data.path);
      const documents = JSON.parse(generatedData);

      for (const doc of documents) {
        await addDoc(collectionRef, doc);
      }

      console.log("Documents inserted:", documents);
      toast({
        title: translations[lang].toast.success,
        description: translations[lang].toast.insertSuccess
          .replace('{{count}}', documents.length.toString())
          .replace('{{path}}', data.path)
      });
    } catch (e: any) {
      toast({
        variant: "destructive",
        title: translations[lang].toast.unknownError,
        description: e?.message || String(e)
      });
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-5xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-orange-600">{translations[lang].title}</h1>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              {lang.toUpperCase()}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setLang('en')}>English</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setLang('zh')}>中文</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setLang('ja')}>日本語</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setLang('ko')}>한국어</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setLang('fr')}>Français</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setLang('es')}>Español</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setLang('de')}>Deutsch</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setLang('ru')}>Русский</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Collapsible open={configOpen} onOpenChange={setConfigOpen}>
        <Card className="p-6 mb-4">
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="w-full flex justify-between items-center mb-2">
              <span className="text-lg font-semibold">{translations[lang].config}</span>
              <span className={cn(
                "px-3 py-1 rounded-full text-sm",
                isInitialized 
                  ? "bg-green-100 text-green-800" 
                  : "bg-yellow-100 text-yellow-800"
              )}>
                {isInitialized ? translations[lang].connected : translations[lang].notConnected}
              </span>
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium">API Key</Label>
                <Input 
                  value={apiKey} 
                  onChange={e => {
                    setApiKey(e.target.value);
                    localStorage.setItem('firebase_apiKey', e.target.value);
                  }}
                  className="w-full"
                  placeholder="Enter your API key"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium">Auth Domain</Label>
                <Input 
                  value={authDomain} 
                  onChange={e => {
                    setAuthDomain(e.target.value);
                    localStorage.setItem('firebase_authDomain', e.target.value);
                  }}
                  className="w-full"
                  placeholder="Enter your auth domain"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium">Project ID</Label>
                <Input 
                  value={projectId} 
                  onChange={e => {
                    setProjectId(e.target.value);
                    localStorage.setItem('firebase_projectId', e.target.value);
                  }}
                  className="w-full"
                  placeholder="Enter your project ID"
                />
              </div>
            </div>
            <Button 
              className="mt-6 w-full"
              size="lg"
              onClick={handleConfigSubmit}
            >
              {translations[lang].initializeFirebase}
            </Button>
          </CollapsibleContent>
        </Card>
      </Collapsible>

      <form onSubmit={form.handleSubmit(handleGenerate)}>
        <Card className="p-4 mb-4">


          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <Label htmlFor="path">{translations[lang].collectionPath}</Label>
              <Input id="path" {...form.register("path")} />
            </div>
            <div>
              <Label htmlFor="count">{translations[lang].numDocuments}</Label>
              <Input
                id="count"
                type="number"
                min="1"
                max="1000"
                {...form.register("count", { valueAsNumber: true })}
              />
            </div>
          </div>

          <Tabs defaultValue="tutorial">
            <TabsList className="mb-4">
              <TabsTrigger value="tutorial">{translations[lang].tutorial}</TabsTrigger>
              <TabsTrigger value="template">{translations[lang].template}</TabsTrigger>
              <TabsTrigger value="preview">{translations[lang].preview}</TabsTrigger>
            </TabsList>
            <TabsContent value="tutorial">
              <div className="prose max-w-none dark:prose-invert">
                <div className="flex justify-between items-center">
                  <h3>{translations[lang].tutorialContent.title}</h3>
                  <a 
                    href="https://fakerjs.dev/guide/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm text-orange-600 hover:text-orange-700 ml-4"
                  >
                    {translations[lang].fakerDocs}
                  </a>
                </div>

                <h4>{translations[lang].tutorialContent.basicTypes}</h4>
                <pre>{translations[lang].tutorialContent.basicTypesExample}</pre>

                <h4>{translations[lang].tutorialContent.mixedValues}</h4>
                <pre>{translations[lang].tutorialContent.mixedValuesExample}</pre>

                <h4>{translations[lang].tutorialContent.mediaTypes}</h4>
                <pre>{translations[lang].tutorialContent.mediaTypesExample}</pre>

                <h4>{translations[lang].tutorialContent.chineseContent}</h4>
                <pre>{translations[lang].tutorialContent.chineseContentExample}</pre>

                <h4>{translations[lang].tutorialContent.arrayAndNested}</h4>
                <pre>{translations[lang].tutorialContent.arrayAndNestedExample}</pre>

                <p className="text-sm text-muted-foreground mt-4">
                  {translations[lang].templateHint}
                </p>
              </div>
            </TabsContent>
            <TabsContent value="template">
              <div className="h-96">
                <Editor
                  height="100%"
                  defaultLanguage="json"
                  value={template}
                  onChange={(value) => setTemplate(value || "")}
                  theme="vs-light"
                  options={{
                    minimap: { enabled: false },
                    fontSize: 14
                  }}
                />
              </div>
            </TabsContent>
            <TabsContent value="preview">
              <div className="h-96">
                <Editor
                  height="100%"
                  defaultLanguage="json"
                  value={generatedData}
                  onChange={(value) => setGeneratedData(value || "")}
                  theme="vs-light"
                  options={{
                    minimap: { enabled: false },
                    fontSize: 14
                  }}
                />
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex gap-4 mt-4">
            <Button type="submit">{translations[lang].generateData}</Button>
            <Button type="button" onClick={form.handleSubmit(handleInsert)}>
              {translations[lang].insertFirestore}
            </Button>
          </div>
        </Card>
      </form>
    </div>
  );
}