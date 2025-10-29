# Aula 15/10/25 - AVL

Implemente, em JavaScript, o **Algoritmo de balanceamento de árvore**. Ela garante que a altura da subárvore esquerda e direita de qualquer nó nunca se diferencie em mais de 1. Se essa regra for quebrada, ela realiza rotações para se reequilibrar.

- **Vantagem**: Garante um desempenho de busca, inserção e remoção no pior caso de O(logn), o que a torna muito confiável.
- **Limitação**: Mais complexa de implementar por causa das rotações. A inserção e remoção são um pouco mais lentas do que em uma BST normal, devido ao custo de rebalanceamento.
