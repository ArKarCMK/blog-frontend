<template>
  <div v-if="editor" class="container">
    <div class="control-group">
      <div class="button-group">
        <n-button
          size="small"
          :disabled="!editor.can().chain().focus().toggleBold().run()"
          :class="{ 'is-active': editor.isActive('bold') }"
          @click="editor.chain().focus().toggleBold().run()"
        >
          <n-icon>
            <FormatBoldFilled />
          </n-icon>
        </n-button>

        <n-button
          size="small"
          :disabled="!editor.can().chain().focus().toggleItalic().run()"
          :class="{ 'is-active': editor.isActive('italic') }"
          @click="editor.chain().focus().toggleItalic().run()"
        >
          <!-- <ion-icon name="italic-outline"></ion-icon> -->
          <n-icon>
            <FormatItalicFilled />
          </n-icon>
        </n-button>

        <n-button
          size="small"
          :disabled="!editor.can().chain().focus().toggleStrike().run()"
          :class="{ 'is-active': editor.isActive('strike') }"
          @click="editor.chain().focus().toggleStrike().run()"
        >
          <n-icon>
            <FormatStrikethroughFilled />
          </n-icon>
        </n-button>

        <n-button
          size="small"
          :disabled="!editor.can().chain().focus().toggleCode().run()"
          :class="{ 'is-active': editor.isActive('code') }"
          @click="editor.chain().focus().toggleCode().run()"
        >
          <n-icon>
            <CodeFilled />
          </n-icon>
        </n-button>

        <n-button
          size="small"
          :class="{ 'is-active': editor.isActive('bulletList') }"
          @click="editor.chain().focus().toggleBulletList().run()"
        >
          <n-icon>
            <FormatListBulletedFilled />
          </n-icon>
        </n-button>

        <n-button
          size="small"
          :class="{ 'is-active': editor.isActive('orderedList') }"
          @click="editor.chain().focus().toggleOrderedList().run()"
        >
          <n-icon>
            <FormatListNumberedFilled />
          </n-icon>
        </n-button>

        <n-button
          size="small"
          :disabled="!editor.can().chain().focus().undo().run()"
          @click="editor.chain().focus().undo().run()"
        >
          <n-icon>
            <UndoFilled />
          </n-icon>
        </n-button>

        <n-button
          size="small"
          :disabled="!editor.can().chain().focus().redo().run()"
          @click="editor.chain().focus().redo().run()"
        >
          <n-icon>
            <RedoFilled />
          </n-icon>
        </n-button>
        <n-button
          size="small"
          @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
        >
          <n-icon>
            <H1 />
          </n-icon>
        </n-button>
        <n-button
          size="small"
          @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
        >
          <n-icon><H2 /></n-icon>
        </n-button>
        <n-button
          size="small"
          @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
        >
          <n-icon><H3 /></n-icon>
        </n-button>
        <n-button
          size="small"
          @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }"
        >
          <n-icon><H4 /></n-icon>
        </n-button>
      </div>
    </div>
    <div class="text-area">
      <editor-content :editor="editor" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { Editor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import TextStyle from "@tiptap/extension-text-style";
import ListItem from "@tiptap/extension-list-item";
import {
  CodeFilled,
  FormatBoldFilled,
  FormatItalicFilled,
  FormatListBulletedFilled,
  FormatListNumberedFilled,
  FormatStrikethroughFilled,
  RedoFilled,
  UndoFilled,
} from "@vicons/material";

import { H1, H2, H3, H4 } from "@vicons/tabler";

const editor = ref(null);
const content = ref("");

const props = defineProps({
  originalContent: String,
});
const emit = defineEmits(["update:content"]);
onMounted(() => {
  editor.value = new Editor({
    extensions: [TextStyle.configure({ types: [ListItem.name] }), StarterKit],
    content: ``,
    onUpdate: ({ editor }) => {
      emit("update:content", editor.getHTML());
    },
  });
});

watch(
  () => props.originalContent,
  (newValue) => {
    if (editor.value && newValue !== editor.value.getHTML()) {
      editor.value.commands.setContent(newValue);
    }
  },
);

onBeforeUnmount(() => {
  editor.value?.destroy();
});
</script>

<style lang="scss" scoped>
/* Button styles */
.is-active {
  background-color: #5e72e4 !important;
  color: white !important;
}

/* Container and editor styles */
.container {
  margin: 20px;
}

.button-group {
  display: flex;
  gap: 8px;
}

.container {
  .text-area {
    border: 1px solid #000;
    border-radius: 8px;
    margin-top: 10px;
    ::v-deep .ProseMirror {
      padding-left: 10px;
      min-height: 300px;
      max-height: calc(100vh - 350px);
      overflow: auto;
      width: calc(100vw - 300px);
    }
    ::v-deep .ProseMirror:focus {
      outline: none;
    }
  }
}
</style>
