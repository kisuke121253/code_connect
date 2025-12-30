import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'; // Tema Dark

export const CodeBlock = ({ language, value }) => {
  return (
    <div style={{ borderRadius: '8px', overflow: 'hidden', margin: '24px 0' }}>
      <SyntaxHighlighter 
        language={language || 'javascript'} 
        style={dracula}
        showLineNumbers={true}
        customStyle={{ margin: 0, padding: '20px', background: '#0f172a' }} // Ajuste ao seu fundo
      >
        {value}
      </SyntaxHighlighter>
    </div>
  );
};